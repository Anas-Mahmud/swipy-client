import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Swipy`;
    }, [title])
};

export default useTitle;