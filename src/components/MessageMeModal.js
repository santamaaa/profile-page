import { useState } from "react"
import Swal from "sweetalert2"

const ViewResumeModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        document.getElementById("msgForm").reset()
        setName('')
        setEmail('')
        setMessage('')
        setModalIsOpen(false)
    }

    const modalContentStyle = modalIsOpen ? { display: "flex" } : { display: "none" }

    const getLocation = (successCallback, errorCallback) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    showPosition(position)
                    successCallback(position)
                },
                (error) => {
                    showError(error)
                    if (errorCallback) {
                        errorCallback(error)
                    }
                }
            )
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Geolocation is not supported by this browser.',
            })
            if (errorCallback) {
                errorCallback(new Error("Geolocation not supported"))
            }
        }
    }

    const showPosition = (position) => {
        document.querySelector('#msgForm input[name="lat"]').value = position.coords.latitude
        document.querySelector('#msgForm input[name="long"]').value = position.coords.longitude
    }
    
    const showError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'You must enable your location.',
                })
                break
            case error.POSITION_UNAVAILABLE:
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Location information is unavailable.',
                })
                break
            case error.TIMEOUT:
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'The request to get user location timed out.',
                })
                break
            case error.UNKNOWN_ERROR:
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An unknown error occurred.',
                })
                break
            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while retrieving location information.',
                })
        }
    }
    
    const messageMeHandleClickOpen = () => {
        getLocation( () => {
                openModal()
            }
        )
    }

    const messageMeHandleClickSubmit = (e) => {
        e.preventDefault()

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const valLatitude = document.querySelector('#msgForm input[name="lat"]').value
        const valLongitude = document.querySelector('#msgForm input[name="long"]').value

        if (name.trim() === '' && email.trim() === '' && message.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name, email, and message is required',
            })
        } else if (name.trim() === '' && email.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name and email is required',
            })
        } else if (name.trim() === '' && message.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name and message is required',
            })
        } else if (email.trim() === '' && message.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email and message is required',
            })
        } else if (name.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Name is required',
            })
        } else if (email.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email is required',
            })
        } else if (message.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Message is required',
            })
        } else if (!emailPattern.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Please enter a valid email address',
            })
        } else {
            fetch('https://sheetdb.io/api/v1/bb6c3q9724hb3', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    data: [
                        {
                            'name': name,
                            'email': email,
                            'message': message,
                            'lat': valLatitude,
                            'long': valLongitude
                        }
                    ]
                })
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Submitted successfully',
                })
                closeModal()
            })
        }

    }
    
    return (
        <div className="relative w-full">
            <button className="w-full py-2.5 md:py-3.5 border-2 border-myblue rounded-lg bg-mywhite text-myblue text-xs md:text-sm font-semibold ease-in duration-300 hover:bg-myblue hover:text-mywhite" onClick={ messageMeHandleClickOpen }>Message Me</button>
            <div className="w-screen h-screen fixed top-0 left-0 z-50 flex justify-center items-center" style={ modalContentStyle }>
                <div className="relative w-full h-full bg-myblack/60" onClick={ closeModal }></div>
                <div className="w-5/6 md:w-3/6 lg:w-2/6 py-6 px-8 absolute z-10 rounded-2xl bg-mywhite">
                    <h3 className="text-myblack text-xl md:text-2xl font-semibold text-center">Send Me a Message</h3>
                    <form className="mt-4 flex flex-col gap-2" id="msgForm" method="POST" autoComplete="off">
                        <input className="px-2 py-1.5 md:px-3.5 md:py-2 rounded-md shadow-myinsetshadow2 text-sm md:text-base" name="name" type="text" required placeholder="Enter your name" onChange={ (e) => setName(e.target.value) } value={ name } />
                        <input className="px-2 py-1.5 md:px-3.5 md:py-2 rounded-md shadow-myinsetshadow2 text-sm md:text-base" name="email" type="email" required placeholder="Enter your email" onChange={ (e) => setEmail(e.target.value) } value={ email } />
                        <textarea className="h-40 px-2 py-1.5 md:px-3.5 md:py-2 rounded-md shadow-myinsetshadow2 text-sm md:text-base resize-none" name="message" required placeholder="Enter your message" onChange={ (e) => setMessage(e.target.value) } value={ message } />
                        <input className="px-2 py-1.5 md:px-3.5 md:py-2 rounded-md shadow-myinsetshadow2 text-sm md:text-base" name="lat" type="hidden" />
                        <input className="px-2 py-1.5 md:px-3.5 md:py-2 rounded-md shadow-myinsetshadow2 text-sm md:text-base" name="long" type="hidden" />
                    </form>
                    <div className="mt-4 flex justify-between gap-2">
                        <button className="w-full py-2 border-2 border-myblue rounded-md bg-white text-myblue text-xs md:text-base font-semibold ease-in duration-300 hover:bg-mywhite" onClick={ closeModal }>Close</button>
                        <button className="w-full py-2 border-2 border-myblue rounded-md bg-myblue text-white text-xs md:text-base font-semibold ease-in duration-300 hover:bg-white hover:text-myblue" onClick={ messageMeHandleClickSubmit }>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewResumeModal