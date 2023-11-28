import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {}

  public async create({}: HttpContextContract) {}

  public async store({ response, request }: HttpContextContract) {
    try {
      const user = request.all()

      await User.create(user)
      response.ok({ msg: 'Se realizó el registro correctamente', data: user })
    } catch (error) {
      response.badRequest({ msg: 'No se pudo realizar el registro', e: error })
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
