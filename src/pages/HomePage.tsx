import { FC } from 'react'
import { List, WindowScroller } from 'react-virtualized'
import AutoSizer from 'react-virtualized-auto-sizer'
import styles from './HomePage.module.css'

const items = [...Array(60000).keys()]

const HomePage: FC = () => {
	const Row = ({ key, index, style }) => {
		const value = items[index]
		return (
			<div
				className={styles.row}
				key={key}
				style={style}
				onClick={e => {
					alert(`You are clicked on \'${value}\' element`)
				}}
			>
				<div>Row {value}</div>
			</div>
		)
	}

	return (
		<div>
			<div style={{ backgroundColor: 'yellow', color: 'black', fontSize: '54px', textAlign: 'center', fontWeight: 900, padding: '25px 0' }}>
				Hello World!
			</div>
			<h1 style={{ backgroundColor: 'green', color: 'black', fontSize: '72px', textAlign: 'center', fontWeight: 900, margin: 0, padding: '50px 0' }}>
				It's a react-virtualized WindowScroller app
			</h1>
			<div className={styles.list}>
				<WindowScroller>
					{({ height, isScrolling, registerChild, scrollTop }) => {
						return (
							<AutoSizer disableHeight>
								{({ width }) => {
									return (
										<div ref={registerChild}>
											<List
												autoHeight
												height={height}
												isScrolling={isScrolling}
												rowCount={items.length}
												rowHeight={55}
												rowRenderer={Row}
												scrollTop={scrollTop}
												width={width}
												overscanCount={3}
											/>
										</div>
									)
								}}
							</AutoSizer>
						)
					}}
				</WindowScroller>
			</div>
		</div>
	)
}

export default HomePage
