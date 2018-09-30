
    while (s.indexOf(")",0)!=-1) {
        var bracketEnd = s.indexOf(")", 0);                                            //get most inner closing parentheses
        var bracketStart = s.lastIndexOf("(", bracketEnd);                             //get most inner opening parentheses
        var revPar = s.slice(bracketStart+1,bracketEnd).split("").reverse().join(""); //reverse most inner parentheses content
        s = s.slice(0, bracketStart) + revPar + s.slice(bracketEnd + 1);               //add it back into the orginal string
    }
    return s;
}