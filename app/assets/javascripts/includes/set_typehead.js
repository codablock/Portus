(function () {
  var set_typehead = typeof exports !== 'undefined' && exports !== null ? exports : this;
  var bloodhound;

  set_typehead.set_typeahead = function (url) {
    $('.remote .typeahead').typeahead('destroy');
    bloodhound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        cache: false,
        url: url,
        wildcard: '%QUERY',
      },
    });
    bloodhound.initialize();
    $('.remote .typeahead').typeahead({ highlight: true }, {
      displayKey: 'name',
      source: bloodhound.ttAdapter(),
    });
  };
}).call(this);
