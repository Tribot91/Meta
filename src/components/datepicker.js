import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize";

class datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    var datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
      firstDay: 1,
      showClearBtn: true,
      i18n: {
        clear: "Temizle",
        cancel: "İptal",
        done: "Seç",
        months: [
          "Ocak",
          "Şubat",
          "Mart",
          "Nisan",
          "Mayıs",
          "Haziran",
          "Temmuz",
          "Ağustos",
          "Eylül",
          "Ekim",
          "Kasım",
          "Aralık"
        ],
        monthsShort: [
          "Oca",
          "Şub",
          "Mar",
          "Nis",
          "May",
          "Haz",
          "Tem",
          "Ağu",
          "Eyl",
          "Eki",
          "Kas",
          "Ara"
        ],
        weekdays: [
          "Pazar",
          "Pazartesi",
          "Salı",
          "Çarşamba",
          "Perşembe",
          "Cuma",
          "Cumartesi"
        ],
        weekdaysShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
        weekdaysAbbrev: ["P", "Pzt", "S", "Ç", "P", "C", "Cmt"]
      }
    });
  }

  render() {
    return (
      <input
        id="aa"
        type="text"
        className="datepicker"
        placeholder={this.props.text}
        onChange={event => this.props.selectedDate(event.target.value)}
      />
    );
  }
}

export default datepicker;
