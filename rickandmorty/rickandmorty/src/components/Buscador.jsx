const fetchCharacters = (name) => {   
    setLoading(true);
       fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
         .then(response => response.json())
         .then(data => {
           setCharacters(data.results || []);
           setLoading(false);
         })
         .catch(error => {
           setError(error);
           setLoading(false);
         });
     };
    