(function () {
  require('../src');

  describe('api test', function () {
    test('null case', function () {
      var str = null;
      var rs = nx.trimNl(str);
      expect(rs).toBe(null);
    });

    test('common case', function () {
      var str1 = `道可道，非常道；名可名，非常名。
无名，天地之始，有名，万物之母。
故常无欲，以观其妙，常有欲，以观其徼。
此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。`;
      var rs1 = nx.trimNl(str1);

      expect(rs1).toBe(
        '道可道，非常道；名可名，非常名。无名，天地之始，有名，万物之母。故常无欲，以观其妙，常有欲，以观其徼。此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。'
      );
    });
  });

})();
