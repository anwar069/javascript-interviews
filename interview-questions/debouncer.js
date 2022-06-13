//  https://codesandbox.io/s/charming-water-dm2cto
//add debouncer
const debouncer = (fn, delay) => {
    let timer;
    return (...args) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
};

const fetchItems = async (text) => {
    // const result = await axios.get(`/characters?name=${text}`);

    // setItems(result.data);
    // setIsLoading(false);
    console.log('fetching..')
};

const debouncedFetch = debouncer(fetchItems, 1000);