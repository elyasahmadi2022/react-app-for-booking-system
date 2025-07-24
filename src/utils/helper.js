export function formatCurrency(amount){
    const formattedCurrency = Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD',
    })
    return formattedCurrency.format(amount);
}