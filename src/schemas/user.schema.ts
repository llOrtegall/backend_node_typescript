import zod from 'zod'

const UserSchema = zod.object({
  nombres: zod.string({
    invalid_type_error: "El campo 'nombres' debe ser de tipo string",
    required_error: "El campo 'nombres' es requerido"
  }),
  apellidos: zod.string({
    invalid_type_error: "El campo 'apellidos' debe ser de tipo string",
    required_error: "El campo 'apellidos' es requerido"
  }),
  documento: zod.number({
    invalid_type_error: "El campo 'documento' debe ser de tipo number",
    required_error: "El campo 'documento' es requerido"
  }),
  telefono: zod.number({
    invalid_type_error: "El campo 'documento' debe ser de tipo number",
    required_error: "El campo 'documento' es requerido"
  }),
  correo: zod.string({
    invalid_type_error: "El campo 'correo' debe ser de tipo string",
    required_error: "El campo 'correo' es requerido"
  }).email({
    message: "El campo 'correo' debe ser un correo válido",
  }),
})

export function validateUser(data: zod.infer<typeof UserSchema>) {
  const user = UserSchema.safeParse(data)
  return user
}
