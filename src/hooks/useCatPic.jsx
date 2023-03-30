const [catPic, setCatPic] = useState([]);

  async function getPic() {
    await unsplash.search
      .getPhotos({ query: "cat", page: 1, perPage: 5 })
      .then((res) => setCatPic(res.response.results))
      .then((err) => console.log("this is err", err));
  }

  useEffect(() => {
    getPic();
  }, []);

  useEffect(() => {
    console.log(catPic);
  }, [catPic]);
