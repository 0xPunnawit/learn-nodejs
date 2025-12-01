const { getUserData, getRoleByUserList } = require('./func');

function main() {
    console.time('process');
    getUserData((users) => {
        // console.log(users);
        getRoleByUserList(users, (userWithRole) => {
            console.log(userWithRole);
            console.timeEnd('process');

            // If we still keep callback -> callback hell
        });
    });
    
}


main();