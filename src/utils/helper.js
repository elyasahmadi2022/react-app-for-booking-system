import {format} from "date-fns"
export function formatCurrency(amount){
    const formattedCurrency = Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD',
    })
    return formattedCurrency.format(amount);
}
export  function findElement(id, travelers){
    const result =  travelers.find(traveler => traveler.id === id)
    return result;
  }

export function formatDates(date){
    return format(date, 'EEE, MMM dd ,yyyy')
}

export function maskEmail(email){
    const [localPar, domain] = email.split('@')
    const visisablePart = localPar.slice(0,2)
    const maskPart = visisablePart +'*'.repeat((localPar.length - 2))
    return `${maskPart}@${domain}`
}