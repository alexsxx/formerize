(function ($) {
    $.fn.formerize = function (m) {
        var methods = {
            init: function (obj) {
                if (obj != undefined && typeof obj === 'object')
                    return this.each(function () {
                        var $this = $(this);
                        var propName = $this.attr('name');
                        if (obj.hasOwnProperty(propName)) {
                            if ($this.is('select'))
                                $this.find('option[value="' + obj[propName] + '"]').prop('selected', true);
                            else if ($this.is(':checkbox, :radio'))
                                $this.prop('checked', obj[propName]);
                            else if ($this.is('input, textarea'))
                                $this.val(obj[propName]);
                            else
                                $this.html(obj[propName]);
                        }
                    });
                else
                    return console.error("Param error");
            },
            get: function () {
                var ret = {};
                this.each(function () {
                    var $this = $(this);
                    var propName = $this.attr('name');
                    if ($this.is('select'))
                        ret[propName] = $this.find('option:selected').val();
                    else if ($this.is(':checkbox, :radio'))
                        ret[propName] = $this.prop('checked');
                    else if ($this.is('input, textarea'))
                        ret[propName] = $this.is('[type=number]') ? ($.isNumeric($this.val()) ? parseFloat($this.val()) : 0) : $this.val();
                });
                return ret;
            }
        }

        if (methods[m])
            return methods[m].apply(this, Array.prototype.slice.call(arguments, 1));
        else if (typeof m === 'object' || !m)
            return methods.init.apply(this, arguments);
        else
            throw "Method doesn't exist";
    }
})(jQuery);
