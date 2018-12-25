<template>
	<div class="v-table">
		<el-table
			ref="table"
			:data="data"
			:default-sort="{prop: 'is_dir', order: 'descending'}"
			style="width: 100%"
			highlight-current-row
			@selection-change="_handleSelectionChange"
			@row-click="_handleRowClick"
			@header-click="_handleHeaderClick"
			@cell-mouse-enter="_handleCellMouseEnter"
			@cell-mouse-leave="_handleCellMouseLeave"
		>
			<el-table-column
				type="selection"
				width="55"
			/>
			<el-table-column
				prop="$path"
				label="文件名称"
				show-overflow-tooltip
			>
				<template slot-scope="scope">
					<i
						class="icon-file"
						:class="scope.row.$typeIcon"
					/>
					<span class="file-name" :style="{ width: scope.row.$showIcon ? '70%' : '' }">
						{{ scope.row.$path }}
					</span>

					<el-dropdown v-show="scope.row.$showIcon" style="float: right;" @visible-change="_handleVisibleChange">
						<span class="icon-tools el-dropdown-link">
							<i class="el-icon-more" />
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>黄金糕</el-dropdown-item>
							<el-dropdown-item>狮子头</el-dropdown-item>
							<el-dropdown-item>螺蛳粉</el-dropdown-item>
							<el-dropdown-item>双皮奶</el-dropdown-item>
							<el-dropdown-item>蚵仔煎</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
					<span class="icon-tools" v-show="scope.row.$showIcon">
						<i class="el-icon-share" />
					</span>
					<span class="icon-tools" v-show="scope.row.$showIcon">
						<i class="el-icon-download" />
					</span>
				</template>
			</el-table-column>
			<el-table-column
				prop="modified"
				label="更新时间"
				width="180"
				sortable
				show-overflow-tooltip
			>
				<template slot-scope="scope">
					{{ scope.row.modified | formatDate }}
				</template>
			</el-table-column>
			<el-table-column
				prop="size"
				label="大小"
				width="180"
				show-overflow-tooltip
			/>
			<el-table-column
				prop="creator"
				label="更新者"
				width="180"
				show-overflow-tooltip
			>
				<!-- eslint-disable-next-line -->
				<template slot="header" slot-scope="scope">
					<span>更新者</span>
					<i
						class="el-icon-arrow-left show-right-btn"
						@click="_handleShowRight"
					/>
				</template>
			</el-table-column>
		</el-table>
		<!-- page -->
		<v-page
			v-if="needPage"
			:total="total"
			:current-page="currentPage"
			@current-change="_currentChange"
		/>
	</div>
</template>

<script>
	export default {
		name: 'ITable',
		props: {
			data: {
				type: Array,
				default: undefined
			},
			needPage: {
				type: Boolean,
				default: true
			},
			total: {
				type: Number,
				default: 0
			},
			currentChange: {
				type: Function,
				default: undefined
			},
			currentPage: {
				type: Number,
				default: 1
			}
		},
		computed: {

		},
		methods: {
			_handleShowRight () {
				this.$emit('show-right')
			},
			_handleSelectionChange (val) {
				this.$refs.table.setCurrentRow()
				this.$emit('selection-change', val)
			},
			_handleRowClick (row, event, column) {
				// 如果当前点击是文件名（定位到class file-name）则跳转目录
				if (column.property === '$path' && (event.target && event.target.className === 'file-name')) {
					this.$emit('cell-click', row, event, column)
				} else {
					this.$refs.table.clearSelection()
					this.$refs.table.setCurrentRow(row)
					this.$emit('row-click', row, event, column)
				}
			},
			_handleHeaderClick (column, event) {
				// 点击头部 清空多选和单选
				this.$refs.table.clearSelection()
				this.$refs.table.setCurrentRow()
				this.$emit('header-click', column, event)
			},
			_currentChange (current) {
				// 当前页变化时 如果currentChange prop函数定义了则触发
				this.currentChange && this.currentChange(current)
			},
			_handleCellMouseEnter (row, column, cell, event) {
				row.$showIcon = true
			},
			_handleCellMouseLeave (row, column, cell, event) {
				row.$showIcon = false
			},
			_handleVisibleChange (isShow) {
				console.log(isShow)
			}
		}
	}
</script>

<style lang="scss">
	.v-table {
		& .icon-file + span {
			vertical-align: middle;
			margin-left: 10px;
		}
		& .file-name {
			display: inline-block;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		& .icon-tools {
			text-align: center;
			vertical-align: middle;
			display: inline-block;
			height: 24px;
			width: 24px;
			float: right;
			border: 1px solid #ebeef5;
			border-radius: 3px;
			margin-right: 10px;
			cursor: pointer;
			box-sizing: border-box;
			&:active {
				background-color: #b1b1b1;
				color: #ffffff;
			}
		}

		& .show-right-btn {
			position: absolute;
			right: 0;
			top: 50%;
			margin-top: -7px;
			cursor: pointer;
		}
	}
</style>
