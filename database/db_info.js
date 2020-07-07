// db 접속 정보를 모아둠.
module.exports = (function() {
    // 모듈로 사용 가능하도록 함.
    return {
        local: {
            // 해당 변수 안에 배열로 접속 정보 저장
            host: '3.20.224.105',
            port: '3306',
            user: 'jhsustain',
            password: 't47fyf22',
            database: 'jhsustain'
        },
        real: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        staging: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        dev: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        }
    }
})();