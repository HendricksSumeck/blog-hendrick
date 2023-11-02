
export const formatDate = (date: string) => {
    const data = new Date(date)
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return data.toLocaleDateString('pt-BR', options);
}