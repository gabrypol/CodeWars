// https://www.codewars.com/kata/remove-the-noise-from-the-string/

// We have a broken message machine that introduces noise to our incoming messages. We know that our messages can't be written using %$&/#·@|º\ª and white characters (like spaces or tabs). Unfortunately our machine introduces noise, which means that our message arrives with characters like: %$&/#·@|º\ª within our original message.


function removeNoise(str){
	return str.replace(/[%$&/#·@|º\\ª]/g, '');
}
