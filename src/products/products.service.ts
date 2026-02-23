import { Inject, Injectable, Logger, NotFoundException } from '@nestjs/common';

import { PrismaService } from '@src/common/services';
import { PaginationDto } from '@src/common/dto';

import { CreateProductDto, UpdateProductDto } from './dto';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger(ProductsService.name);

  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto,
    });
  }

  async findAll(paginationDto: PaginationDto) {
    const { page, perPage } = paginationDto;

    const totalProducts = await this.prisma.product.count({
      where: { available: true },
    });

    const totalPages = Math.ceil(totalProducts / perPage);

    return {
      meta: {
        totalRecords: totalProducts,
        totalPages,
        page,
        perPage,
      },
      data: await this.prisma.product.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
        where: { available: true },
      }),
    };
  }

  async findOne(id: number) {
    const product = await this.prisma.product.findUnique({
      where: { id, available: true },
    });

    if (!product) {
      throw new NotFoundException(`Product with id #${id} not found`);
      // throw new RpcException({
      //   statusCode: HttpStatus.BAD_REQUEST,
      //   message: `Product with id #${id} not found`,
      // });
    }

    return product;
  }

  async update(updateProductDto: UpdateProductDto) {
    const { id, ...data } = updateProductDto;

    await this.findOne(id);

    return this.prisma.product.update({
      where: { id },
      data: data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    // return this.prisma.product.delete({
    //   where: { id },
    // });

    return this.prisma.product.update({
      where: { id },
      data: { available: false },
    });
  }
}
