export async function fetchSales(query: string, currentPage: number) {
	const data = [
		{
			id: 1,
			datetime: "2024-08-28T18:35:00",
			origin: "Espuela QRO",
			client: "Cliente 1",
			noUnit: "0023",
			advance: "50",
			status: "Sin Factura",
			eta: 2,
		},
		{
			id: 2,
			datetime: "2024-08-02T18:35:00",
			origin: "Intermodal QRO",
			client: "Cliente 2",
			noUnit: "4581",
			advance: "30",
			status: "En Patio",
			eta: 1.5,
		},
		{
			id: 3,
			datetime: "2024-08-03T18:35:00",
			origin: "Espuela AGS",
			client: "Cliente 3",
			noUnit: "A234",
			advance: "85",
			status: "Com. Pago",
			eta: 3.5,
		},
		{
			id: 4,
			datetime: "2024-08-01T18:35:00",
			origin: "Espuela SLP",
			client: "Cliente 4",
			noUnit: "6765t2",
			advance: "95",
			status: "Patio Salida",
			eta: 6,
		}
	];

	await new Promise((resolve) => setTimeout(resolve, 2000));

	const results = data.filter(
		(d) =>
			d.datetime.includes(query) ||
			d.origin.includes(query) ||
			d.client.includes(query) ||
			d.noUnit.includes(query) ||
			d.status.includes(query)
	);

	return results;
}

export async function fetchSaleHistory(id: string) {
	const data = [
		{
			processType: "user",
			dateTime: "2024-07-28T16:35:00",
			description: "Solicitud de carga",
			origin: "Ejecutivo ventas 1",
			lapse: null,
		},
		{
			processType: "notification",
			dateTime: "2024-07-28T16:40:00",
			description: "Vista notificación",
			origin: "Operaciones (oficina)",
			lapse: "00:02:00",
		},
		{
			processType: "entry",
			dateTime: "2024-07-28T11:45:00",
			description: "Entrada unidad",
			origin: "Operaciones (patio)",
			lapse: "01:05:00",
		},
		{
			processType: "bulk",
			dateTime: "2024-07-28T22:30:00",
			description: "Unidad cargada",
			origin: "Operaciones (patio)",
			lapse: "03:20:00",
		},
		{
			processType: "user",
			dateTime: "2024-07-28T23:30:00",
			description: "Envió CDC",
			origin: "Operaciones (oficina)",
			lapse: "01:20:00",
		},
		{
			processType: "user",
			dateTime: "2024-07-29T00:30:00",
			description: "Validación de carga",
			origin: "Cliente",
			lapse: "00:30:00",
		},
		{
			processType: "user",
			dateTime: "2024-07-29T01:45:00",
			description: "Generación Factura",
			origin: "Facturación",
			lapse: "01:45:00",
		},
		{
			processType: "notification",
			dateTime: "2024-07-29T12:30:00",
			description: "Confirmación Pago",
			origin: "Tesorería",
			lapse: "07:01:00",
		},
		{
			processType: "user",
			dateTime: "2024-07-29T14:12:00",
			description: "Pase Salida",
			origin: "Operaciones (patio)",
			lapse: "01:20:00",
		},
	];

	await new Promise((resolve) => setTimeout(resolve, 2000));

	return data;
}

export async function fetchSummaryByStates() {
	const data = [
		{
			name: "Querétaro",
			total: 35,
			current: 10,
			stats: {
				pending: 8,
				inProcess: 3,
				finished: 10,
			},
		},
		{
			name: "San Luis Potosí",
			total: 35,
			current: 10,
			stats: {
				pending: 8,
				inProcess: 3,
				finished: 10,
			},
		},
		{
			name: "Aguascalientes",
			total: 35,
			current: 10,
			stats: {
				pending: 8,
				inProcess: 3,
				finished: 10,
			},
		},
	];

	await new Promise((resolve) => setTimeout(resolve, 2000));

	return data;
}
