export function formatCurrency(amount: number) {
    return Intl.NumberFormat(
        'en-US',
        { 
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol'
        }
    ).format(amount);
}