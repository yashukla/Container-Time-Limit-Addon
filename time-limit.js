//Function to check if time has been exceeded (recursive)

async function time_check(cont_time_limit, current_time){
    //base case
    if (current_time => cont_time_limit) {
        //redirect to "time limit reached" webpage
        return
    }
    // warning case
    else if (current_time + 300000 == cont_time_limit) {
        //warn user that they are 5 minutes from limit

        //wait for 1 minute
        await new Promise(r => setTimeout(r, 60000));
        //call function again
        time_check(cont_time_limit, current_time + 60000)
    }
    else {
        // wait for 1 minute
        await new Promise(r => setTimeout(r, 60000));
        //call function again
        time_check(cont_time_limit, current_time + 60000)
    }
}

