$(document).ready(function () {
    var $form = $("#my_form");
    var $btn_add_item = $("#btn_add_item");

    // $.validator.addMethod("allRequired", function (value, element, param) {
    //     // Use the name to get all the inputs and verify them
    //     var name = element.name;
    //     return $('input[name="' + name + '"]')
    //         .map(function (i, obj) {
    //             return $(obj).val();
    //         })
    //         .get()
    //         .every(function (v) {
    //             return v;
    //         });
    // });

    $btn_add_item.on("click", function () {
        var $my_input = $form.find('[name="my_input[]"]');
        var my_input_count = $my_input.length;

        var $new_wrapper = $("<div>").addClass("mb-3");
        var $new_label = $("<label>")
            .attr("for", "my_input_" + (my_input_count + 1))
            .text("קלט #" + (my_input_count + 1) + ":");
        var $new_input = $("<input>")
            .attr("type", "text")
            .attr("name", "my_input[]")
            .attr("id", "my_input_" + (my_input_count + 1));

        $new_wrapper.append($new_label).append($new_input);

        console.log($my_input, $my_input.filter(":last"));
        var $last_input_wrapper = $my_input.filter(":last").closest("div");
        $last_input_wrapper.after($new_wrapper);
    });

    $.validator.addMethod("noDuplicates", function (value, element, param) {
        console.log(element, value, this.currentForm, Object.keys(this.submitted)[0]);

        var name = Object.keys(this.submitted)[0];
        var $form = $(this.currentForm);

        var otherValues = $form
            .find('[name="' + name + '"]')
            .filter(function (index, el) {
                return el !== element;
            })
            .map(function (index, el) {
                var $el = $(el);
                return $el.val();
            })
            .get();

        return !otherValues.find(function (val) {
            return val === value;
        });
    });

    $form
        .find('[name="my_input[]"]')
        .not(":eq(0), :eq(1)")
        .each(function (index, el) {
            var $el = $(el);
            $el.val(123);
        });

    // form validate on submit click
    var validator = $form.validate({
        focusInvalid: true,
        errorElement: "span",
        errorClass: "invalid",
        validClass: "valid",
        onfocusout: false,
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                validator.errorList[0].element.focus();
            }
        },
        rules: {
            "my_input[]": {
                required: true,
                noDuplicates: true,
            },
        },
        messages: {
            "my_input[]": {
                required: "שדה נדרש.",
                noDuplicates: "הערך כבר קיים ברשימה.",
            },
        },
        submitHandler: function (form) {
            console.log(form);
        },
    });

    validator.checkForm = function () {
        console.log("check form");
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
            if (
                this.findByName(elements[i].name).length != undefined &&
                this.findByName(elements[i].name).length > 1
            ) {
                for (var cnt = 0; cnt < this.findByName(elements[i].name).length; cnt++) {
                    this.check(this.findByName(elements[i].name)[cnt]);
                }
            } else {
                this.check(elements[i]);
            }
        }
        return this.valid();
    };
});
