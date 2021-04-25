<template>

  <b-card body-class="p-0" header-class="border-0">
    <template v-slot:header>
      <b-row align-v="center" class="mt-5">
        <b-col>
          <h3 class="mb-0">Table Data</h3>
        </b-col>
        <b-col class="text-right">
          <a href="/mockup" class="btn btn-sm btn-primary">Lihat lengkap</a>
        </b-col>
      </b-row>
    </template>

    <el-table class="table-responsive table"
              :data="tableData"
              header-row-class-name="thead-light">
      <el-table-column label="Nama"
                       min-width="130px"
                       prop="nama">
        <template v-slot="{row}">
          <div class="font-weight-600">{{row.nama}}</div>
        </template>
      </el-table-column>
      <el-table-column label="NRM"
                       min-width="70px"
                       prop="nrm">
      </el-table-column>
      <el-table-column label="Poli"
                       min-width="90px"
                       prop="poli">
      </el-table-column>
    </el-table>
  </b-card>
</template>
<script>
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown} from 'element-ui'
  export default {
    name: 'Table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        tableData: [
          {
            nama: 'Sobri',
            nrm: '123',
            poli: 'Bedah Umum',
          },
          {
            nama: 'Aliyah',
            nrm: '234',
            poli: 'Kebidanan',
          },
          {
            nama: 'Budiman',
            nrm: '345',
            poli: 'Jantung',
          },
          {
            nama: 'Chandra',
            nrm: '456',
            poli: 'Orthopedi',
          },
          {
            nama: 'Daniel',
            nrm: '567',
            poli: 'Syaraf',
          }
        ]
      }
    }
  }
</script>
<style>
</style>
