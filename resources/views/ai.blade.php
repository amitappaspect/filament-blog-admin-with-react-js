<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AI Demo Appaspect</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
    <style>
        :root {
            --bs-body-bg: var(--bs-gray-100);
        }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">Search Here</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {{-- <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li> --}}
          </ul>
          <form class="d-flex" role="search" action="{{ route('ai-result') }}" method="POST">
            @csrf
            <input class="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search" required>
            <button class="btn btn-outline-success" type="submit">Search</button>
            <a href="/ai"><button class="btn btn-outline-danger ms-2" type="button">Reset</button></a>
          </form>
        </div>
      </div>
    </nav>

    <div class="container my-5">
        
        <div class="col-lg-12 mt-2 px-0">
            @if(isset($Error))
            <div class="alert alert-danger">{{ $Error }}</div>
            @endif

            @if(isset($result))
            <h2>Result</h2>
            <table class="table">
                <thead>
                    <td>Model</td>
                    <td>Result</td>
                    <td>Token Used</td>
                    <td>Money Used</td>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ $result['model'] }}</td>
                        <td>{{ $result['choices'][0]['text'] }}</td>
                        <td>{{ $result['usage']['total_tokens'] }}</td>
                        <td>$ {{ (isset($result['usage']['total_tokens']) && $result['usage']['total_tokens'] > 0) ? number_format(0.002 * $result['usage']['total_tokens'] / 1000, 8) : '0' }}</td>
                    </tr>
                </tbody>
            </table>
            @else
            <div class="alert alert-info">No result found!</div>
            @endif
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
  </body>
</html>