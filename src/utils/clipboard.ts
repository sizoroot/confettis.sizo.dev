export const copyToClipboard = (event: Event) => {

    const buttonElement = event.target as HTMLButtonElement
    const value = buttonElement.attributes[1].value
    const hiddenElement = document.createElement('textarea')

    hiddenElement.value = value
    hiddenElement.setAttribute('readonly', '')
    hiddenElement.style.position = 'absolute'
    hiddenElement.style.left = '-9999px'
    document.body.appendChild(hiddenElement)
    hiddenElement.select()
    document.execCommand('copy')
    document.body.removeChild(hiddenElement)

    buttonElement.style.backgroundColor = 'rgb(145 227 91 / 57%)'
    buttonElement.innerHTML = value + ' <i class="ti ti-clipboard-check text-[18px] align-middle mt-[-2px] inline-block ml-1"></i>'

    setTimeout(() => {
        buttonElement.style.backgroundColor = 'rgb(0 0 0 / 9%)'
        buttonElement.innerHTML = value + ' <i class="ti ti-clipboard text-[18px] align-middle mt-[-2px] inline-block ml-1"></i>'
    }, 5000)

}