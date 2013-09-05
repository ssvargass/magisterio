<?php
	function magisterio_preprocess_html(&$variables) {		
	    if(arg(0)=='node' && is_numeric(arg(1))) {
	    	$class_name = '';
	    	if(arg(1) == 113) $class_name = 'editorial';
	    	if(arg(1) == 114) $class_name = 'libreria';
	        $variables['classes_array'][] = 'class_interna_' . $class_name;
	    }
	}
?>