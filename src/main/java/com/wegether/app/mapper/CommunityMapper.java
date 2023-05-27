package com.wegether.app.mapper;

import com.wegether.app.dao.CommunityDAO;
import com.wegether.app.domain.dto.CommunityDTO;
import com.wegether.app.domain.dto.CommunityPagination;
import com.wegether.app.domain.vo.CommunityVO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface CommunityMapper {

    public List<CommunityDTO> selectAll(CommunityPagination communityPagination);

    public Optional<CommunityDTO> select(Long id);

    public void insert(CommunityDTO communityDTO);

    public void update(CommunityDTO communityDTO);

    public void delete(Long id);

    public int selectCountOfCommunity(CommunityPagination communityPagination);
}