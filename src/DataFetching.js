const API_PATH = 'http://localhost:8080'

export function fetchLessonHistory() {
    return fetch(API_PATH + '/lessonHistory', {
        'method': 'GET',
        'headers': getHeaders()
    })
        .then(content => content.json());
}

export function fetchSkillTree() {
    return fetch(API_PATH + '/progressTree', {
        'method': 'GET',
        'headers': getHeaders()
    })
        .then(content => content.json());
}

function getHeaders() {
    return new Headers({
        // 'Authorization': localStorage.getItem('jwtToken')
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjbGllbnQiLCJleHAiOjE3MDk1MTU3MTV9.R4CuwU6ITaCzGRuAg_Z4GPLVuNP-CFzegeksjKwUvL8'
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