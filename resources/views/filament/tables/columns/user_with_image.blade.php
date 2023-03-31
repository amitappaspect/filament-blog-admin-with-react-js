<div class="text-center" href="/">
	@if($getState()->avatar)
  	<img
    src="{{ Storage::url($getState()->avatar) }}"
    class="inline object-cover w-12 h-12 mr-2 rounded-full"
    alt="Avatar" />
    @endif
  <span class="mb-2">{{ $getState()->name }}</span>
</div>
