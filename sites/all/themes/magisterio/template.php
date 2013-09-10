<?php
	function magisterio_preprocess_html(&$variables) {
	    $url = request_path();
	  	$url_arr = explode('/', $url);
	  	if(count($url_arr) > 1) $url = $url_arr[0];
	    $variables['classes_array'][] = 'class_interna_' . $url;
	}
?>