import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

export default function HomepageFeatures() {
  return (
	<section className="">
		<br /><br /><br />
		<center>
			<a href="https://npmjs.com/package/logs.chat" target="_blank">
				<img src="https://logs.chat/img/meta.png" className={styles.logo} />
			</a>
			<br /><br />
			<a href="https://npmjs.com/package/logs.chat" target="_blank">
				<img src="https://nodei.co/npm/logs.chat.png" />
				<br />
				<img src="https://img.shields.io/npm/v/logs.chat.svg?maxAge=3600" />
				&nbsp;
				<img src="https://img.shields.io/npm/dt/logs.chat.svg?maxAge=3600" />
			</a>
		</center>
		<br /><br />
	</section>
  );
}
