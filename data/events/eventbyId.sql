SELECT [citaId]
	,[tipoCita]
	,[descripcionCita]
	,[fechainicioCita]
	,[fechafinCita]
	,[direccion]
	,[numeroEspecialidad] 
FROM [dbo].[events]
WHERE [citaId]=@citaId