<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Site Metas -->
    <title>Cloapedia - Stylish Magazine Blog Template</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="author" content="">
    
    <!-- Site Icons -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">
    
    <!-- Design fonts -->
    <link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700" rel="stylesheet"> 
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900" rel="stylesheet"> 

    <!-- Bootstrap core CSS -->
    <link href="{{ asset('site/css/bootstrap.css') }}" rel="stylesheet">

    <!-- FontAwesome Icons core CSS -->
    <link href="{{ asset('site/css/font-awesome.min.css') }}" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="{{ asset('site/style.css') }}" rel="stylesheet">

    <!-- Responsive styles for this template -->
    <link href="{{ asset('site/css/responsive.css') }}" rel="stylesheet">

    <!-- Colors for this template -->
    <link href="{{ asset('site/css/colors.css') }}" rel="stylesheet">
    <link href="{{ asset('site/css/custom.css') }}" rel="stylesheet">

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/css/app.css'])
</head>
<body>

    <!-- LOADER -->
    <div id="preloader">
        <img class="preloader" src="{{ asset('site/images/loader.gif') }}" alt="">
    </div><!-- end loader -->
    <!-- END LOADER -->

    <div id="wrapper">
        
        <div id="app">
        </div>
        
        <div class="dmtop">Scroll to Top</div>
        
    </div><!-- end wrapper -->

    <!-- Core JavaScript
    ================================================== -->
    <script src="{{ asset('site/js/jquery.min.js') }}"></script>
    <script src="{{ asset('site/js/tether.min.js') }}"></script>
    <script src="{{ asset('site/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('site/js/custom.js') }}"></script>

</body>
</html>