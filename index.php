<!DOCTYPE html>
<html dir="rtl" lang="he">
    <head>
        <title>Jquery Validate Array Tutorial</title>
        <meta charset="UTF-8" />

        <!-- Bootstrap core-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css" />

        <!-- Custom styles -->
        <link rel="stylesheet" href="./styles.css?v=<?= time() ?>" />
    </head>

    <body>
        <div id="app">
            <form id="my_form" action="" method="post">
                <div class="mb-3">
                    <label for="my_input_1">קלט #1: </label>
                    <input type="text" name="my_input[]" id="my_input_1" />
                </div>
                <div class="mb-3">
                    <label for="my_input_1">קלט #2: </label>
                    <input type="text" name="my_input[]" id="my_input_2" />
                </div class="mb-3">
                <div class="mb-3">
                    <label for="my_input_1">קלט #3: </label>
                    <input type="text" name="my_input[]" id="my_input_3" />
                </div class="mb-3">
                <div class="mb-3">
                    <label for="my_input_1">קלט #4: </label>
                    <input type="text" name="my_input[]" id="my_input_4" />
                </div>
                <div class="mb-3">
                    <label for="my_input_1">קלט #5: </label>
                    <input type="text" name="my_input[]" id="my_input_5" />
                </div>
                <button type="submit">צור חדש</button>
            </form>
        </div>

        <!-- Jquery -->
        <script
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
        ></script>
        <!-- Bootstrap 5 -->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Jquery validate & additinal methods -->
        <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"
        ></script>
        <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/additional-methods.min.js"
        ></script>

        <!-- Custom script -->
        <script type="text/javascript" src="./index.js?v=<?= time() ?>"></script>
    </body>
</html>
