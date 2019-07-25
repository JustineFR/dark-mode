import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('key')
}

export default useDarkMode;