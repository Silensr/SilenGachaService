<script lang="ts" setup>
const user = useUser();
if (user.value) {
	await navigateTo("/"); // redirect to profile page
}
</script>
<template>
	<h1>Sign in</h1>
	<a href="/api/login/github">Sign in with GitHub</a>
	<br>
	<a href="/api/login/discord">Sign in with Discord</a>
</template>