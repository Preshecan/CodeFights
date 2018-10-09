function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if (yourLeft+yourRight == friendsLeft+friendsRight){
        if(yourLeft == friendsLeft || yourLeft == friendsRight){    //don't need to check yourRight aswell since if the total is equal yourRight must satisfy the same condition
           return true;
        }
    }
    return false;
}