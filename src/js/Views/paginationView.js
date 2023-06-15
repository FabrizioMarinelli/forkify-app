import icons from 'url:../../img/icons.svg';
import View from './view';
class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.page;

      handler(goToPage);
    });
  }
  _generateMarkup() {
    const nextButt = `
    <button data-page = "${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1}</span>
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>
    `;
    const prevButt = `
    <button data-page = "${
      this._data.page - 1
    }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${this._data.page - 1}</span>
    </button>
    `;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    if (this._data.page === 1 && numPages > 1) {
      return nextButt;
    }
    if (this._data.page === numPages && numPages > 1) {
      return prevButt;
    }
    if (this._data.page < numPages) {
      return [prevButt, nextButt].join('');
    }
    return '';
  }
}
export default new PaginationView();
