const API_PATH = 'http://localhost:8080'

export function fetchLessonHistory() {
    return fetch(API_PATH + '/lessonHistory', {
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