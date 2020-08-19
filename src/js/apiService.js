export default {
  searchQuery: '',
  page: 1,
  apiKey: '17935593-e396bfe1aec92e4aa57ec3c04',
  fetchImages() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
