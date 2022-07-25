

export const UserDashboardRoutes: any = {
    guide: "guides",
    validate: "validate_payment"
}

export const SuperUserDashboardsRoutes = [
    'guides', 'validate_payment', 'attach_valid_payment'
]


//O servidor vai enviar o tipo de rota de acesso e na rota própria será executado uma verificação no servidor para se conseguir lidar com apenas o acesso específico.