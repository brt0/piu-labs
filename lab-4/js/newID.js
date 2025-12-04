function newID(){

    var lastID=localStorage.getItem('lastID', lastID);

    if(typeof lastID !== 'null')
    {
        lastID++;
        localStorage.setItem('lastID', lastID);
        return lastID;
    }
    else
    {
        let lastID=0;
        lastID++;
        localStorage.setItem('lastID', lastID)
        return lastID;
    }
}
