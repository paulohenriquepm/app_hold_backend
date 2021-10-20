import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { User } from '.prisma/client';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password }: ICreateUserDTO): Promise<User> {
    const userExists = await this.usersRepository.findByEmail(email);

    if (userExists) throw new AppError('E-mail já está em uso');

    const encryptedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: encryptedPassword,
    });

    delete user.password;

    return user;
  }
}

export { CreateUserUseCase };
