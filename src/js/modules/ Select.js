const Select = (function () {
  "use strict";
  const countrySelect = $(".country-select");
  const customSelect = $(".js-custom-select");
  const customOptionSelect = $(".js-options");
  const selectedOption = $(".js-selected");

  return {
    setOption: function () {
      countrySelect.find("option").each(function (i, option) {
        //все страны нашего селекта
        const countryCode = option.value;
        const countryName = option.text;

        //проверка на наличие переменной (для нормальной работы на сервере)
        let cdn_path = window.cdn_path;

        //формируем линки с нашего селекта для кастомного
        const linkOptions = `<a class="option ${countryCode}" style="background-image: url(${
          window.cdn_path || "../"
        }img/${countryCode.toLowerCase()}.svg)" href="?&country_code=${countryCode}" data-value=${countryCode}><span class="option__text">${countryName}</span></a>`;
        customOptionSelect.append(linkOptions);
      });
    },
    showBlockOptions: function () {
      customSelect.click(function (e) {
        e.preventDefault();
        const _this = $(this);
        _this.toggleClass("opened");
      });
    },
    closeBlockOptions: function () {
      $(document).mouseup(function (e) {
        if (
          !customSelect.is(e.target) && // если клик был не по нашему блоку
          customSelect.has(e.target).length === 0
        ) {
          // и не по его дочерним элементам
          customSelect.removeClass("opened"); // скрываем его
        }
      });
    },
    initSelectOption: function () {
      const currentSelectedOption = $(".country-select option:selected");
      const currentCountrySelectCode = currentSelectedOption.val();
      const currentCountrySelecttext = currentSelectedOption.text();
      const selectedText = `<span class="option__text">${currentCountrySelecttext}</span>`;
      selectedOption.addClass(currentCountrySelectCode);
      selectedOption.append(selectedText);
    },
    changeSelectOption: function () {
      $(".option").click(function (e) {
        e.stopPropagation();
        const _this = $(this);
        const valueOption = _this.data("value");
        const textOption = _this.find(".option__text").text();

        selectedOption.removeClass();
        selectedOption.addClass("select__selected js-selected " + valueOption);
        selectedOption.find(".option__text").text(textOption);

        $(".country-select option").attr("selected", false);
        countrySelect
          .find(`option[value=${valueOption}]`)
          .attr("selected", "selected");
      });
    },
    checkCurrentOption: function () {
      const currentOptionSelect = countrySelect
        .find('option[selected="selected"]')
        .val();
      const currentOptionCustomSelect = customOptionSelect.find(
        `a[data-value=${currentOptionSelect}]`
      );
      currentOptionCustomSelect.click(function (e) {
        e.preventDefault();
        customSelect.removeClass("opened");
      });
    },
    init: function () {
      Select.setOption();
      Select.changeSelectOption();
      Select.showBlockOptions();
      Select.checkCurrentOption();
      Select.initSelectOption();
      Select.closeBlockOptions();
    },
  };
})();

export default Select;
