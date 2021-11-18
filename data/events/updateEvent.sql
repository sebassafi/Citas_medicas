UPDATE [dbo].[events]
SET [tipoCita]=@tipoCita
    ,[descripcionCita]=@descripcionCita
    ,[fechainicioCita]=@fechainicioCita
    ,[fechafinCita]=@fechafinCita
    ,[direccion]=@direccion
    ,[numeroEspecialidad]=@numeroEspecialidad
WHERE [citaId]=@citaId

SELECT [citaId]
	,[tipoCita]
	,[descripcionCita]
	,[fechainicioCita]
	,[fechafinCita]
	,[direccion]
	,[numeroEspecialidad] 
FROM [dbo].[events]
WHERE [citaId]=@citaId