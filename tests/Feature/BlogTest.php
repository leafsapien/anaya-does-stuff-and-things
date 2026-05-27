<?php

test('anyone can visit the blog page', function () {
    $response = $this->get(route('blog'));
    $response->assertOk();
});
