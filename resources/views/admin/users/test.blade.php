<form method="POST">
    @csrf

    <!-- Other form fields -->

    {!! NoCaptcha::renderJs() !!}
    {!! NoCaptcha::display() !!}

    <button type="submit">Submit</button>
</form>
