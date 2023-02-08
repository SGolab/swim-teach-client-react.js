const API_PATH = 'http://localhost:8080'

export function fetchSkillTree() {
    return fetch(API_PATH + '/progressTree', {
        'method': 'GET',
        'headers': getHeaders()
    })
        .then(content => content.json());
}

export async function fetchUserDetails() {
    return fetch(API_PATH + `/userDetails`, {
        'method': 'GET',
        'headers': getHeaders()
    })
        .then(response => response.json())
}

export function fetchPostLogin(loginData) {

    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(loginData)
    })
}

function getHeaders() {
    return new Headers({
        'Authorization': localStorage.getItem('jwtToken')
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbGllbnQiLCJleHAiOjE3MDk1MTU3MTV9.R4CuwU6ITaCzGRuAg_Z4GPLVuNP-CFzegeksjKwUvL8'
    })
}

const imageStatusMap = {
    'NOT_TRAINED': '/blocked-icon.png',
    'TRAINED': '/in-progress-icon.png',
    'ACQUIRED': '/correct-icon.webp'
}

export function getImageForStatus(status) {
    return imageStatusMap[status]
}

const imageTitleMap = {
    'PURE BASICS': '/star.png',
    'STROKES BASICS': '/star2.png',
    'STROKES ADVANCED': '/star3.png',
    'EXTRAS': '/extra.png'
}

export function getImageForTitle(title) {
    return imageTitleMap[title];
}

export function getLoremIpsum() {
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}

export function getColorForStatus(status) {
    switch (status) {
        case 'ACQUIRED':
            return 'hsl(120, 73%, 75%)'
        case 'TRAINED':
            return 'hsl(59, 100%, 75%)'
        case 'NOT_TRAINED':
            return 'transparent'
        default:
            return ''
    }
}