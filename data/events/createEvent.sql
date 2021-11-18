INSERT INTO [dbo].[events]
(
    [tipoCita]
    ,[descripcionCita]
    ,[fechainicioCita]
    ,[fechafinCita]
    ,[direccion]
    ,[numeroEspecialidad]
)
VALUES (
    @tipoCita
    ,@descripcionCita
    ,@fechainicioCita
    ,@fechafinCita
    ,@direccion
    ,@numeroEspecialidad
)

SELECT SCOPE_IDENTITY() AS citaId