package com.wegether.app.service.project;

import com.wegether.app.domain.dto.*;
import com.wegether.app.domain.type.CategoryType;
import com.wegether.app.domain.vo.FileVO;
import com.wegether.app.domain.vo.ProjectVO;

import java.util.List;
import java.util.Optional;

public interface ProjectService {

    // 프로젝트 목록
    public List<ProjectDTO> getList(ProjectPagination projectPagination, CategoryType categoryType);

    // 프로젝트 등록
    public void write(ProjectDTO projectDTO);

    // 프로젝트  수정
//    public void modify(ProjectDTO projectDTO);
    //    게시글 조회
    public Optional<ProjectDTO> read(Long id);

    public int getTotal();



    default ProjectDTO toDTO(ProjectVO projectVO) {
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.setId(projectDTO.getId());
        projectDTO.setMemberId(projectVO.getMemberId());
        projectDTO.setProjectTitle(projectVO.getProjectTitle());
        projectDTO.setProjectIntroducing(projectVO.getProjectIntroducing());
        projectDTO.setProjectMajor(projectVO.getProjectMajor());
        projectDTO.setProjectSchool(projectVO.getProjectSchool());
        projectDTO.setProjectRegisterDate(projectVO.getProjectRegisterDate());
        projectDTO.setProjectUpdateDate(projectVO.getProjectUpdateDate());
        projectDTO.setProjectEndDate(projectVO.getProjectEndDate());
        projectDTO.setProjectReadCount(projectVO.getProjectReadCount());
        projectDTO.setProjectNowPersonnel(projectVO.getProjectNowPersonnel());
        projectDTO.setProjectTotalPersonnel(projectVO.getProjectTotalPersonnel());
        return projectDTO;
    }

    default ProjectFileDTO toDTO(FileVO fileVO){
        ProjectFileDTO projectFileDTO = new ProjectFileDTO();
        projectFileDTO.setId(fileVO.getId());
        projectFileDTO.setFileName(fileVO.getFileName());
        projectFileDTO.setFileUuid(fileVO.getFileUuid());
        projectFileDTO.setFileSize(fileVO.getFileSize());
        projectFileDTO.setFilePath(fileVO.getFilePath());
        return projectFileDTO;
    }
}





















